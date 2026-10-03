from dataclasses import dataclass


@dataclass(frozen=True)
class DemoRequest:
    project_name: str
    category: str
    borings: list[dict]


def validate_demo_request(request: DemoRequest) -> list[str]:
    errors: list[str] = []

    if not request.project_name.strip():
        errors.append("project_name is required")
    if request.category not in {"demo"}:
        errors.append("category is not supported in the demo")
    if not request.borings:
        errors.append("at least one boring is required")

    return errors
