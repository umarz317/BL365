import { createPublicClient, http } from "viem";
import { anvil, bscTestnet } from "viem/chains";

const client = createPublicClient({ transport: http(), chain: bscTestnet });

export async function getTransactionReceipt(hash) {
  var status = await client.waitForTransactionReceipt({ hash });
  return status;
}
