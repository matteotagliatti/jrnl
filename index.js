#! /usr/bin/env node
import { program } from "commander";
import { create } from "./commands/create.js";

program
  .command("create")
  .description("Create a new entry for today or edit an existing one")
  .action(create);

program.parse();
