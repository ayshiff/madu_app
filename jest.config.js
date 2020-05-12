module.exports = {
    verbose: true,
    transform: {
        '.(ts|tsx)': 'ts-jest'
    },
    collectCoverage: true,
    preset: 'ts-jest',
    coverageThreshold: {
        global: {
            statements: 75,
            functions: 60
        }
    },
    modulePathIgnorePatterns: ['dist', 'cypress/', 'cache/'],
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1'
    },
    collectCoverageFrom: [
        'src/app/**/*.{epics,epic}.{ts,tsx}',
        'src/app/store/*.{ts,tsx}',
        '!src/app/store/root.reducer.{ts,tsx}',
        '!src/app/**/root.epic.{ts,tsx}'
    ]
};
