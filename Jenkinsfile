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
                sh 'ls -l' // Verifica la estructura del workspace
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
                            echo "Limpiando dependencias antiguas..."
                            sh 'rm -rf node_modules package-lock.json || true'

                            echo "Instalando dependencias..."
                            sh 'npm install'

                            echo "Construyendo frontend..."
                            sh 'npm run build' // Ejecuta build
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
                            echo "Limpiando dependencias antiguas..."
                            sh 'rm -rf node_modules package-lock.json || true'

                            echo "Instalando dependencias..."
                            sh 'npm install'

                            echo "Construyendo backend..."
                            sh 'npm run build' // Ejecuta build si existe
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
