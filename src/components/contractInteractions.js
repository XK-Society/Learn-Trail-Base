import { http } from "viem";
import { baseSepolia } from "viem/chains";
import { createBundlerClient } from "viem/account-abstraction";
import { client, RPC_URL } from "../components/paymasterConfig.js";
import { QUIZ_CONTRACT_ABI, QUIZ_CONTRACT_ADDRESS } from './quizContractConfig';

const checkQuizExists = async (quizId) => {
  try {
    const result = await client.readContract({
      address: QUIZ_CONTRACT_ADDRESS,
      abi: QUIZ_CONTRACT_ABI,
      functionName: 'quizzes',
      args: [quizId],
    });
    
    // Check if the quiz exists by verifying if its ID matches the requested ID
    const quizExists = BigInt(result.id) === BigInt(quizId);
    
    if (!quizExists) {
      console.warn(`Quiz with ID ${quizId} does not exist`);
    }
    
    return quizExists;
  } catch (error) {
    console.error(`Error checking if quiz ${quizId} exists:`, error);
    return false;
  }
};

export const completeQuiz = async (quizId, score, account) => {
  try {
    const bundlerClient = createBundlerClient({
      account,
      client,
      transport: http(RPC_URL),
      chain: baseSepolia,
    });

    // Check if the quiz exists before trying to complete it
    const quizExists = await checkQuizExists(quizId);
    if (!quizExists) {
      console.error(`Quiz with ID ${quizId} does not exist`);
      return false;
    }

    const calls = [{
      abi: QUIZ_CONTRACT_ABI,
      functionName: "completeQuiz",
      to: QUIZ_CONTRACT_ADDRESS,
      args: [quizId, score],
    }];

    const userOpHash = await bundlerClient.sendUserOperation({
      account,
      calls,
      paymaster: true
    });

    const receipt = await bundlerClient.waitForUserOperationReceipt({
      hash: userOpHash,
    });

    console.log("✅ Quiz completion transaction successfully sponsored!");
    console.log(`⛽ View sponsored UserOperation: https://base-sepolia.blockscout.com/op/${receipt.userOpHash}`);
    return true;
  } catch (error) {
    console.error("Error completing quiz:", error);
    return false;
  }
};

export const getUserQuizAttempt = async (userAddress, quizId) => {
  try {
    if (!userAddress) {
      throw new Error("User address is undefined");
    }
    const result = await client.readContract({
      address: QUIZ_CONTRACT_ADDRESS,
      abi: QUIZ_CONTRACT_ABI,
      functionName: 'getUserQuizAttempt',
      args: [userAddress, quizId],
    });

    return {
      completed: result[0],
      score: Number(result[1]),
      lastAttemptTime: Number(result[2]),
      attemptedVersion: Number(result[3])
    };
  } catch (error) {
    console.error("Error getting user quiz attempt:", error);
    return null;
  }
};