# <img src="./images/rzlogo.png" alt="ruzz" width="30" height="30"> Ruzz

<p align="center">Coding Is Life</p>
<p align="center">If you're interested in collaborating, feel free to reach out to me!</h5>
<p align="center">I'm also available for commission work.</p>

## My Advanced Expertise:
<div align="center">
    <img src="./images/html.png" alt="Html" width="80" height="80">
    <img src="./images/css.png" alt="Css" width="80" height="80">
    <img src="./images/axios.png" alt="Axios" width="80" height="80">
    <img src="./images/vuelogo.png" alt="Vue.js Logo" width="80" height="80">
    <img src="./images/pylogo.png" alt="Python" width="80" height="80">
    <img src="./images/flask.png" alt="Flask" width="80" height="80">
</div>

## My Intermediate Expertise:
<div align="center">
    <img src="./images/fetch.png" alt="fetch" width="80" height="80">
    <img src="./images/sqlalchemy.png" alt="sql" width="200" height="100">
    <img src="./images/mariadb-logo.png" alt="mariadb" width="80" height="80">
    <img src="./images/mysql.png" alt="mysql" width="80" height="80">
</div>

## My Basic Expertise:
<div align="center">
    <img src="./images/js.png" alt="Js" width="80" height="80">
    <img src="./images/bootstrap.jpg" alt="bootstrap" width="80" height="80">
    <img src="./images/postgresql.png" alt="postgres" width="80" height="80">
</div>

# set-up repository

This project demonstrates how to set up a new Git repository with sparse checkout.

## Getting Started

### Prerequisites

- Ensure you have Git installed on your machine.
- You need access to a remote Git repository (e.g., on GitHub).

### Initial Setup For All Directory
git clone <repo-url>


### Initial Setup For Individual Directory

Follow these steps to initialize a new Git repository with sparse checkout:

### 1. Create a New Directory:
mkdir <my-new-project>
cd <my-new-project>


### 2. Initialize the Repository:
git init

### 3. Add the Remote Repository:
git remote add origin <repo-url>

### 4. Enable Sparse Checkout:
git sparse-checkout init --cone

### 5. Specify the Directory to Pull:
#### directory name in Vue-Flask repository
git sparse-checkout set <e.g config-1>

### 6. Pull the Desired Branch:
git pull origin main

