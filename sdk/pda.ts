import { utils } from "@project-serum/anchor";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import type { PublicKey } from "@solana/web3.js";

import { PROGRAM_ID } from "./generated/stakePool";

export const findStakeEntryId = (mintId: PublicKey): PublicKey => {
  return findProgramAddressSync(
    [utils.bytes.utf8.encode("stake-entry"), mintId.toBuffer()],
    PROGRAM_ID
  )[0];
};

export const findStakePoolId = (name: string): PublicKey => {
  return findProgramAddressSync(
    [utils.bytes.utf8.encode("stake-pool"), utils.bytes.utf8.encode(name)],
    PROGRAM_ID
  )[0];
};
