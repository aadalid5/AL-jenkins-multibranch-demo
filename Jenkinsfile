pipeline {
    agent any
    tools {nodejs 'Node v18.x'}

    stages {
        stage('1. Install Dependencies'){
            steps {
                sh "node -v"
                sh "npm ci"
            }
        }

        stage('2. Code analysis'){
            parallel {
                stage('2.1. Code Style Scan') {
                    steps{
                        sh "npm run lint"
                    }
                }
            }
        }

        stage('3. Tests') {
            steps{
                sh "npm run test"
            }
        }
    }
}