module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
        ".+\\.ts$": "ts-jest",
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1", // Tudo que tiver "@/" ele vai referenciar nosso diretório raiz "src".
    }
}
