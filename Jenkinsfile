pipeline {
    agent any
    tools {node 'Node v18.x'}

    stages {
        stage('install'){
            steps {
                sh "node -v"
                sh "npm ci"
            }
        }

        stage('Code analysis'){
            steps{
                sh "npm run lint:js"
            }
        }
    }
}