pipeline {
    agent any
    stages {       
        stage("deploy") {
            steps {
                echo 'stop old container...'
                sh "docker-compose down"
                sh "docker-compose build --no-cache"
                sh "docker-compose up -d"
            }
        }
    }
}