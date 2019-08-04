pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 6666:6666' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
