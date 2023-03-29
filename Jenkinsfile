pipeline {
    agent any
    tools {nodejs 'node'}

    stages {
        stage('node version'){
            steps {
                sh "node -v"
                sh "npm -v" 
            }
        }
    }
}