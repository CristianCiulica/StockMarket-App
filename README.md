# Stock Market Simulation and Prediction Platform

Bachelor's thesis project: simulated stock trading and AI-assisted price prediction.

## Structure

- `services/trading-service`: Spring Boot application for demo accounts, orders and positions.
- `services/identity-service`: Spring Boot application for authentication and authorization.
- `services/market-data-service`: Spring Boot application for quotes and historical bars.
- `services/prediction-service`: Python application for model inference.
- `services/analysis-service`: Python application for explanations.
- `frontend`: React and TypeScript application.
- `infra/nginx`: gateway configuration.
- `infra/postgres`: database initialization scripts.
- `docs`: architecture decisions and project documentation.
- `tests/postman`: API collections.
- `tests/k6`: load and concurrency scenarios.

## Development status

Directory structure only. Generate the first Spring Boot application inside `services/trading-service`.
Each service will have its own build configuration and Dockerfile. Docker Compose configuration will be added at the repository root when the first service and database are configured.
