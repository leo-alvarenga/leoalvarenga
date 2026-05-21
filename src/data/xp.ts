import { Language } from "../config";
import { TECH_MAP, type Technology } from "./technologies";
import type { COMPANY_LOGOS, TranslatableText } from "../utils";

export type CompanyLogo = keyof typeof COMPANY_LOGOS;

export type Company = {
  name?: TranslatableText;
  logo?: CompanyLogo;
  page?: string;
  location?: TranslatableText;
};

export type Xp = {
  company: Company;
  description: TranslatableText;
  position: TranslatableText;
  icon: string;
  stack: Technology[];

  start: string;
  end?: string;
};

export const EXPERIENCES: Xp[] = [
  {
    company: {
      name: "FITec Labs",
      page: "https://fitec.org.br",
      logo: "fitec",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
    description: {
      [Language.english]:
        "Implementation of Infrastructure as Code (IaC) using Terraform, automating environment provisioning and version control, resulting in a reduction of manual setup time from 4 hours to just 20 minutes; . Development of Helm Charts for deployments in Kubernetes, ensuring standardization and consistent management of services across development, staging, and production environments; . Engineering and optimization of interfaces in React and TypeScript for corporate Geographic Information Systems (GIS), focusing on performance improvements and reducing load times for large data volumes; . Acted as a technical reference in DevOps and Front-end areas, establishing development best practices and ensuring software architecture scalability.",
      [Language.portugues]:
        "Implementação de Infraestrutura como Código (IaC) utilizando Terraform, automatizando o provisionamento de ambientes e controle de versão, resultando na redução do tempo de configuração manual de 4 horas para apenas 20 minutos; Desenvolvimento de Helm Charts para implantações em Kubernetes, garantindo padronização e gestão consistente de serviços nos ambientes de desenvolvimento, homologação e produção; Engenharia e otimização de interfaces em React e TypeScript para Sistemas de Informação Geográfica (SIG) corporativos, com foco em melhorias de performance e redução do tempo de carregamento para grandes volumes de dados; Atuei como referência técnica nas áreas de DevOps e Front-end, estabelecendo melhores práticas de desenvolvimento e garantindo a escalabilidade da arquitetura de software.",
    },
    icon: "fa6-solid:screwdriver-wrench",
    position: {
      [Language.english]: "Software Engineer",
      [Language.portugues]: "Engenheiro de Software",
    },
    stack: [
      TECH_MAP.ts,
      TECH_MAP.react,
      TECH_MAP.tailwindcss,
      TECH_MAP.storybook,
      TECH_MAP.postgresql,
      TECH_MAP.bash,
      TECH_MAP.docker,
      TECH_MAP.k8s,
      TECH_MAP.helm,
    ],
    start: "2025-08",
  },
  {
    company: {
      name: "Vetta",
      page: "https://vetta.digital",
      logo: "vetta",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
    description: {
      [Language.english]:
        "Development of Viridis NG, a web application ecosystem focused on optimizing energy and material consumption in the steel industry, serving more than 8 globally scaled industrial plants. Engineering high-performance features and components for the internal Design System, emphasizing standardization and reuse by multiple teams across different projects. Architecture and maintenance of REST APIs with Node.js and Express, including endpoint documentation and the definition of versioning strategies to ensure service integrity. Refactoring and optimization of critical modules, applying design patterns to ensure code scalability and maintainability. Ensuring technical parity and international collaboration, acting at the interface between complex industrial requirements and the delivery of high-availability software.",
      [Language.portugues]:
        "Desenvolvimento do Viridis NG, ecossistema de aplicações web voltado à otimização de consumo energético e de materiais na indústria siderúrgica, atendendo a mais de 8 plantas industriais de escala global. Engenharia de funcionalidades e componentes de alta performance para Design System interno, com foco em padronização e reutilização por múltiplos times em diferentes projetos. Arquitetura e manutenção de APIs REST com Node.js e Express, abrangendo a documentação de endpoints e a definição de estratégias de versionamento para garantir a integridade dos serviços. Refatoração e otimização de módulos críticos, aplicando padrões de projeto (Design Patterns) para assegurar a escalabilidade e a manutenibilidade do código. Garantia de paridade técnica e colaboração internacional, atuando na interface entre requisitos industriais complexos e entregas de software de alta disponibilidade",
    },
    icon: "fa6-solid:code",
    position: {
      [Language.english]: "Front-end Software Engineer (React/TypeScript)",
      [Language.portugues]:
        "Engenheiro de Software Front-end (React/TypeScript)",
    },
    stack: [
      TECH_MAP.ts,
      TECH_MAP.react,
      TECH_MAP.antd,
      TECH_MAP.styledComponents,
      TECH_MAP.storybook,
      TECH_MAP.postgresql,
      TECH_MAP.bash,
      TECH_MAP.nodejs,
      TECH_MAP.express,
    ],
    start: "2023-03",
    end: "2025-07",
  },
  {
    company: {
      name: "Vetta",
      page: "https://vetta.digital",
      logo: "vetta",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
    description: {
      [Language.english]:
        "Support and guarantee of high availability (99% uptime SLAs) for critical services, orchestrating mission-critical environments via Kubernetes and Docker Compose. Autonomous management of Cloud-Native infrastructure, responsible for provisioning and governance of Kubernetes clusters for multiple internal products. Technical interface in international projects, strategically acting in DevOps and IT Governance to accelerate time-to-market through advanced automation. Mastery of the delivery lifecycle (CI/CD), designing deployment pipelines and monitoring/observability strategies to ensure software resilience in production. Point of reference for engineering teams, solving complex architecture, deployment, and environment configuration impediments.",
      [Language.portugues]:
        "Sustentação e garantia de alta disponibilidade (SLAs de 99% uptime) para serviços críticos, orquestrando ambientes de missão oficial via Kubernetes e Docker Compose. Gestão autônoma de infraestrutura Cloud-Native, sendo responsável pelo provisionamento e governança de clusters Kubernetes para múltiplos produtos internos. Interface técnica em projetos internacionais, atuando estrategicamente em frentes de DevOps e Governança de TI para acelerar o time-to-market através de automação avançada. Domínio do ciclo de vida de entrega (CI/CD), projetando pipelines de deploy e estratégias de monitoramento/observabilidade para garantir a resiliência do software em produção. Ponto de referência para times de engenharia, solucionando impedimentos complexos de arquitetura, deployment e configurações de ambiente",
    },
    icon: "fa6-solid:code",
    position: {
      [Language.english]: "DevOps Engineer",
      [Language.portugues]: "Engenheiro DevOps",
    },
    stack: [
      TECH_MAP.ts,
      TECH_MAP.react,
      TECH_MAP.antd,
      TECH_MAP.styledComponents,
      TECH_MAP.postgresql,
      TECH_MAP.bash,
    ],

    start: "2022-09",
    end: "2023-02",
  },
  {
    company: {
      name: "Vetta",
      page: "https://vetta.digital",
      logo: "vetta",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
    description: {
      [Language.english]:
        "Stabilization and monitoring of services, working on environment configuration via Kubernetes and Docker Compose to ensure the availability of test applications. Provisioning of scalable infrastructure, including the creation and tuning of Kubernetes clusters for demonstration and staging environments. Involvement in DevOps initiatives in international projects, focusing on automation of IT Governance processes and optimization of environment demand workflows. Development and refinement of CI/CD pipelines, applying containerization concepts and monitoring observability metrics to support code quality. Technical support for engineering teams, handling deployment inconsistencies and ensuring parity between development and production environments.",
      [Language.portugues]:
        "Estabilização e monitoramento de serviços, com atuação na configuração de ambientes via Kubernetes e Docker Compose para assegurar a disponibilidade de aplicações de teste. Provisionamento de infraestrutura escalável, incluindo a criação e o ajuste de clusters Kubernetes para ambientes de demonstração e homologação. Integração em frentes de DevOps em projetos internacionais, com foco na automação de processos de Governança de TI e na otimização do fluxo de demandas de ambiente. Desenvolvimento e refinamento de pipelines de CI/CD, aplicando conceitos de conteinerização e acompanhamento de métricas de observabilidade para suporte à qualidade do código. Suporte técnico aos times de engenharia, com atuação na triagem de inconsistências de deployment e na garantia de paridade entre ambientes de desenvolvimento e produção",
    },
    end: "2022-8",
    icon: "fa6-solid:gears",
    position: {
      [Language.english]: "Intern DevOps Engineer",
      [Language.portugues]: "Analista DevOps Estagiário",
    },
    stack: [TECH_MAP.bash, TECH_MAP.docker, TECH_MAP.k8s, TECH_MAP.azureDevOps],
    start: "2021-03",
  },
];
