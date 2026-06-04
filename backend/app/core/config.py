from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str
    APP_VERSION: str
    API_V1_PREFIX: str

    class Config:
        env_file = ".env"


settings = Settings()