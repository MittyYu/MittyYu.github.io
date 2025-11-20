---
layout: project
title: AnyLogic warehouse simulation
image: /assets/img/portfolio1.png
description: "Built a warehouse simulation to drive data-driven decisions and predict future resource needs. It functions as a digital twin, optimizing future project planning and forecasting."
caption: "Image for illustrative purposes only, actual model is proprietary."
github_link: "" 
---

### Project Overview
This project involved creating a sophisticated warehouse simulation model using **AnyLogic**. The primary goal was to provide a data-driven tool for optimizing warehouse operations and forecasting future resource requirements.

### Simulations vs. AI/ML models
Simulations and AI/ML models are different ways of modeling the world: Simulation start from explicit rules and equations about how a system works, while AI/ML models start from data and learn patterns without knowing the underlying rules in advance. They increasingly complement each other, but conceptually they sit on opposite ends of a “rules vs data” spectrum.

### Key Features
*   **Digital Twin:** The model functions as a digital twin of the physical warehouse.
*   **Data-Driven Decisions:** Enables decision-making based on simulated performance metrics.
*   **Resource Planning:** Helps predict future needs for staffing, equipment, and space.

### Technologies Used
Here is a snippet of the kind of logic involved:
```java
// Example of a custom agent function in AnyLogic
if (pallet.isReadyForShipping()) {
    send(pallet, outboundTruck);
}
```

You can find more details in the [official AnyLogic documentation](https://www.anylogic.com/).
