pipeline {
    agent any
    tools {nodejs 'Node v18.x'}

    stages {
        stage('Install Dependencies'){
            steps {
                sh "node -v"
                sh "npm ci"
            }
        }

        stage('Code analysis'){
            parallel {
                stage('Code Style Scan') {
                    steps{
                        sh "npm run lint"
                    }
                }
            }
        }

        stage('Tests') {
            steps{
                sh "npm run test"
            }
        }
    }
}