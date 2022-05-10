pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                checkout scm
            }
        }
        stage('Download dependency') {
            steps {
                sh '''cd front-end
                npm install'''
            }
        }
        stage('Scan code with Lint') {
            steps {
                sh '''cd front-end
                npm run lint'''
            }
        }
        stage('Run unit test') {
            steps {
                sh '''cd front-end
                npm i jest-html-reporter
                npm run test:unit'''
            }
 
        }
        stage('Create code coverage unit test') {
            steps {
                    clover(cloverReportDir: 'front-end/coverage', cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                    unhealthyTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0],
                    failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                )
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'front-end/coverage/lcov-report', reportFiles: 'index.html', reportName: 'Unit code coverage Report', reportTitles: 'Unit code coverage Report'])
            }
 
        }
        stage('Create test report unit test') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'front-end', reportFiles: 'test-report.html', reportName: 'Unit Test Report', reportTitles: 'Unit Test Report'])
            }
 
        }

         
        stage('Run component test') {
            steps {
                    sh '''cd front-end
                    npm i cypress-mochawesome-reporter
                    npm run component_test'''
            }
        }
        stage('Create test report component test') {
            steps {
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'front-end/cypress/reports', reportFiles: 'index.html', reportName: 'component Test Report', reportTitles: 'component Test Report'])
            }
 
        }


        stage('Build') {
            steps {
                    sh '''cd front-end
                    npm run build'''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
        stage('Notification') {
            steps {
                echo 'All Stage pass'
            }
        }
    }
}
