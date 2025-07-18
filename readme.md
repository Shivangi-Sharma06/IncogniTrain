# INCOGNITRAIN 

## 🔒 Privacy-Preserving AI Training Using Zero-Knowledge Proofs (ZKPs)

This project enables training AI models on **private datasets** (e.g., hospital or financial data) without revealing the raw data. It uses **zk-SNARKs** to prove that the model was trained correctly — keeping sensitive data safe.

---

## 🚀 Features

- Train models on private data without exposing it
- Generate zk-SNARK proofs of training correctness
- Verify model integrity using lightweight cryptographic proofs

---

## 🛠️ Tech Stack

-  `snarkjs` for Zero-Knowledge Circuits
- `PyTorch`  for ML training
- `Node.js` for CLI tools
- `ONNX` for model export and compatibility

---

## 📁 Structure

| Folder        | Description                            |
|---------------|----------------------------------------|
| `/zkp`        | Circuits and ZKP proof scripts         |
| `/ai-model`   | ML training code and model artifacts   |
| `/cli`        | Node.js CLI for user interaction       |
| `/scripts`    | Misc scripts like verification         |

---

## ✨ Author

Shivangi Sharma 


// we will be implementing the zkp factor first.
// refer to the docs for further details.
 // the expected accuracy for the model to train and work will be around 80% but would be subjective to data too.
 changes made
