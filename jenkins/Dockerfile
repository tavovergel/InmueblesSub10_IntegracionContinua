FROM jenkins/jenkins:lts

USER root


RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Verificar instalación
RUN node -v
RUN npm -v

USER jenkins
