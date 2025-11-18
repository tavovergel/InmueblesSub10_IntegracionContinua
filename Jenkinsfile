pipeline {
    agent any

    environment {
        WORKSPACE_DIR = "${env.WORKSPACE}"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Obteniendo código desde GitHub..."
                checkout scm
                sh 'ls -l'                 // Verifica la estructura del workspace
            }
        }

        stage('Build Frontend') {
            steps {
                echo "Construyendo frontend..."
                script {
                    // Ruta corregida del frontend
                    def frontendDir = "${WORKSPACE_DIR}/Frontend/InmueblesSub10Front"
                    if (fileExists("${frontendDir}/package.json")) {
                        dir(frontendDir) {
                            sh 'npm install'
                            sh 'npm run build'  // Ejecuta build si tienes script build
                        }
                    } else {
                        error "No se encontró package.json en ${frontendDir}. Verifica la ruta de tu frontend."
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                echo "Construyendo backend..."
                script {
                    def backendDir = "${WORKSPACE_DIR}/Backend" // Ruta correcta del backend
                    if (fileExists("${backendDir}/package.json")) {
                        dir(backendDir) {
                            sh 'npm install'
                            sh 'npm run build' // Ejecuta build si tienes script build
                        }
                    } else {
                        error "No se encontró package.json en ${backendDir}. Verifica la ruta de tu backend."
                    }
                }
            }
        }

        stage('Pruebas') {
            steps {
                echo "Ejecutando pruebas..."
                // Aquí puedes ejecutar tests, por ejemplo:
                // sh 'npm test' desde el frontend o backend
            }
        }
    }

    post {
        success {
            echo "Pipeline finalizado correctamente ✅"
        }
        failure {
            echo "Pipeline falló ❌"
        }
    }
}
