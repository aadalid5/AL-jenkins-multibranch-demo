pipeline {
    agent any
    tools {nodejs 'Node v18.x'}

    stages {
        stage('install'){
            steps {
                sh "node -v"
                sh "npm -v"
                sh "npm ci"
            }
        }

        stage('Code analysis'){
            parallel {
                stage('style scan') {
                    steps{
                        sh "npm run lint:js"
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