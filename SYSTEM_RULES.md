# 🤖 System Rules & Agent Validation Rulebook

This document defines the strict governance and audit contract for this repository. 
Any **AI Agent** or **Developer** adding, modifying, or reviewing labs in this workspace MUST follow these rules to ensure the codebase remains a high-signal **Proof-of-Learning (PoL)** laboratory.

---

## 📋 Lab Validation Checklist

When creating or auditing a lab, verify all 5 rules below:

### Rule 1: Root Domain Taxonomy
The lab **MUST** reside under one of the 4 designated root domain directories:
- `ai/` (`agents/`, `applications/`)
- `cloud-and-devops/` (`aws/`, `azure/`, `cicd/`, `kubernetes/`, `terraform/`)
- `software-engineering/` (`backend/`, `frontend/`, `games/`, `golang/`, `python/`)
- `scripting-and-automation/` (`bash/`, `powershell/`, `python/`)

> ❌ **Invalid**: Storing labs in root, `temp/`, `labs/`, or unassigned top-level folders.

---

### Rule 2: Naming Conventions (Kebab-Case)
Directory names **MUST** use lowercase kebab-case.
- ✅ **Valid**: `1-crypto-conversion-api`, `aws-linux-server`, `get-system-info`
- ❌ **Invalid**: `aws_linux_server` (underscores), `CryptoAPI` (camelCase), `AWS Linux Server` (spaces/uppercase)

---

### Rule 3: Git Submodule Integrity
- Labs **MUST NOT** contain internal `.git` directories.
- All code belongs directly to the main root Git repository.

---

### Rule 4: Proof-of-Learning (PoL) Documentation
Every lab directory **MUST** contain a local `README.md` based on [LAB_TEMPLATE.md](file:///home/rahul/3-labs/devops-engineer/LAB_TEMPLATE.md) with all 4 required sections:

1. `🎯 Objective`: Brief statement on what concept/hypothesis was tested.
2. `🚀 Procedure & Execution`: Step-by-step commands to run locally.
3. `📸 Proof of Learning (Evidence)`: **MANDATORY** raw CLI log snippet, test execution output, or screenshot link proving the code ran successfully.
4. `💡 Key Takeaways & Gotchas`: 2-3 bullet points of real-world insights and failure modes solved.

> ❌ **Invalid**: Code-only directories without a local `README.md` or missing execution evidence output logs.

---

### Rule 5: Repository Hygiene & Safety
- **No Secrets**: Never commit `.env` files, API keys, or credentials.
- **No Build Artifacts**: Ensure `node_modules/`, `__pycache__/`, `.terraform/`, `dist/`, `.venv/`, and binary build outputs are ignored by [.gitignore](file:///home/rahul/3-labs/devops-engineer/.gitignore).
- **No Conceptual Notes**: Theory, roadmaps, and cheat sheets belong on [rahulgajbhiye.com](https://rahulgajbhiye.com), not in this code repository.

---

## 🤖 Agent Verification Routine (How to Audit a Lab)

AI agents can run the following validation routine when inspecting a lab:

```bash
# 1. Verify directory taxonomy & kebab-case
echo "Checking path format..."

# 2. Check for nested .git directories
find <lab-path> -name ".git"

# 3. Check for local README.md
ls -la <lab-path>/README.md

# 4. Verify evidence section in README.md
grep -i "Proof of Learning" <lab-path>/README.md
```
