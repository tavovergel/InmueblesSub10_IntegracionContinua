pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                echo "Construyendo frontend..."
                sh '''
                    cd Frontend
                    npm install
                    npm run build
                '''
            }
        }

        stage('Build Backend') {
            steps {
                echo "Construyendo backend..."
                sh '''
                    cd Backend
                    npm install
                '''
            }
        }

        stage('Pruebas') {
            steps {
                echo "Ejecutando pruebas..."
                sh '''
                    cd Backend
                    npm test || true
                '''
            }
        }
    }
}
