#! /usr/bin/env node
import { program } from "commander";
import { create } from "./commands/create.js";
import { view } from "./commands/view.js";

program
  .command("create", { isDefault: true })
  .description("Create a new entry for today or edit an existing one")
  .action(create);

program
  .command("view <date>")
  .description("View a journal entry (dateformat: YYYY-MM-DD)")
  .action(view);

program.parse();
