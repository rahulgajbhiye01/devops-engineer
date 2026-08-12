#!/usr/bin/env node

import * as fs from "node:fs";

const argv = process.argv.slice(2);

if (argv.length === 0) {
  console.log("Usage: task-cli add <task>");
  process.exit(1);
}

const file = "tasks.json";

const command = argv[0];

switch (command) {
  case "list":
    const tasks = fs.existsSync(file)
      ? JSON.parse(fs.readFileSync(file, "utf8"))
      : [];
    console.log(tasks);
    break;
  case "add":
    const newTask = {
      id: tasks.length + 1,
      description: "Buy milk",
      status: "active",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
    console.log("Task added.");
    break;
  case "update":
    fs.writeFileSync("tasks.json", argv.slice(1).join(" ") + "\n", {
      flag: "a",
    });
    console.log("Task added.");
    break;
  case "delete":
    fs.writeFileSync("tasks.json", argv.slice(1).join(" ") + "\n", {
      flag: "a",
    });
    console.log("Task added.");
    break;
}
