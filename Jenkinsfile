pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Descargando código del repositorio...'
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Construyendo frontend...'
                sh '''
                    cd frontend
                    npm install
                    npm run build
                '''
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Construyendo backend...'
                sh '''
                    cd backend
                    npm install
                '''
            }
        }

        stage('Pruebas') {
            steps {
                echo 'Ejecutando pruebas (simuladas)...'
                sh 'echo "No hay pruebas configuradas aún"'
            }
        }
    }
}
