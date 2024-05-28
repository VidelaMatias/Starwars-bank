## Starting and submitting the application
1. Install dependencies with `npm install`.
2. Start the application using `npm start`.
3. Open [http://localhost:3000](http://localhost:3000) in your browser to test the app.

### Introduction
As the chosen engineer, you have access to critical information:

* **Residents:** A roster of high-net-worth individuals whose fortunes are entwined with the fate of the galaxy.

* **Planets:** The vast array of planets where Coruscant Bank operates, each with its unique economic challenges and opportunities.

* **Transactions:** Detailed records of your clients' financial transactions, recorded in both the now obsolete "Imperial Crown Standard" and the widely accepted "Galactic Credit Standard".

In the wake of the Empire's fall, the Republic has turned to Coruscant Bank to aid in rectifying the administrative chaos left behind. Your mission is to build the foundation of the administrative application, which will eventually ensure the seamless transition of high-net-worth clients into the new era.

## Requirements

Your task is to design the foundation of a responsive user interface capable of identifying planets susceptible to uprisings and enabling proactive intervention. The objective is to build a UI that assists administrators in analyzing transactions across various planets. To meet this goal, adhere to the following guidelines:

1. **Summary**
    - The administrators would like to see a summary of all the planets of the galaxy.
    - From that list, they would like to be able to search for a planet by its name.
    - From that list, they would like to be able to re-order the planet by its name (ascending or descending).

2. **Detail**
    - The administrators would like to access detailed information for each planet.
    - They would like to be able to filter the transactions by its currency type (GSC and ICS)
