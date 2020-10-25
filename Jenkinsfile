pipeline {

    agent {
        node { label 'Abraham_PC' }
    }

   stages {
       stage('Building') {
         steps {
            echo 'Contruyendo Interface'
            }
        }
       stage('Versioning') {
         steps {
            // Get some code from a GitHub repository
            git 'https://github.com/TSOFT-AUTO-PE/Demo_Pipeline_SauceLabs.git'
            }
        }
        stage('Clean the Script') {
            steps {
            bat 'mvn clean'
            }
      }
        stage('Update DATA') {
         steps {
            echo 'Se realiza cambio de DATA'
            }
        }
        stage('Running the Test') {
            steps {
            bat 'mvn test'
            }
      }
        stage('Upload Evidence on Sauce Labs') {
            steps {
            echo 'Revisa evidencias en https://app.saucelabs.com/'
            }
      }
    }