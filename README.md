# Boter Kaas & Eieren

Simple Dutch tic-tac-toe game created using **ReactJS**. 

# Files

Listed in the repository.

# Gameplay
```mermaid
graph LR
A((User plays X)) --> B((Computer plays O)) --> A --> C[User win?]-- Yes -->D{User wins}

C -- No -->E[Computer win?]-- Yes -->F{Computer wins}

C -- No --> B --> E -- No --> A