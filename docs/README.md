# Journey Wise API
![Image description](https://images.unsplash.com/photo-1528518290605-1fcc8dcca204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60)

This API allows authenticated users to post much needed information about entheogenic substances so that others have access to valid, pertinent and vital information before they ingest these substances.

## Description

Entheogens are defined as chemical substances, usually from plants, that produce non-ordinary states of consciousness upon ingestion for religious or spiritual purposes. These substances are sometimes referred to as "psychedelics" as well as "sacred plant medicines." Outdated research and experimentation from the 1950s, 60s, and 70s comprises a considerable amount of what both scientists and the general public think they know about the potential risks of entheogenic/psychedelic  substance use. Unfortunately, this body of knowledge includes studies that wouldn’t meet today’s scientific standards and many stem from urban legends as well as sensational, unsubstantiated news stories. Sacred plant medicines are regarded as highly beneficial to many indigenous cultures throughout the world and psychedelics are used to enhance people’s experience of their own consciousness and awareness. Do to the stigmatization and marginalization of individuals and groups who use these substances, many people use them in uninformed, risky, and dangerous ways because of their fear of judgement and intolerance. This api provides valuable information about these substances, including dosages and applications in order create a healing culture of acceptance in mainstream culture around the potentially beneficial nature of use of these substances and indigenous healing modalities.


## Installation

To install this API, clone the repo, open terminal and run this command in that directory.

```bash
npm install
```

Then run:

```bash
npm start
```

# How to Make Requests

## Get all entheogens

Send a GET request to URL `localhost:3000/entheogens` to get a list of all entheogens.

Data will look lke:
```json
[
    {
        name: "Mushrooms",
        plant source: "Psilocybe cubensis",
        psychoactiveChemical: "psilocybin",
        dosage: "1-5 grams",
        healingApplications: "PTSD, depression, obsessive-compulsive disorder, quitting smoking, drug and alcohol addiction, cluster headaches, and cancer-related or other end-of-life psychological distress"
    }
    {
        name: "Ayahuasca",
        plantSource: "Banisteriopsis caapi and Psychotria viridis",
        psychoactiveChemical: "DMT",
        dosage: ".25-1.5 ounces",
        healingApplications: "suicide prevention, depression, anxiety, panic and symptoms related to trauma, drug and alcohol addiction treatment"
    }
]
```

## Get a specific entheogen by id

Send a GET request to URL `localhost:3000/entheogens/ID_HERE` to get a single entheogen

Data will look like:
```json
[
    {
        name: "Mushrooms",
        plantSource: "Psilocybe cubensis",
        psychoactiveChemical: "psilocybin",
        dosage: "1-5 grams",
        healingApplications: "PTSD, depression, obsessive-compulsive disorder, quitting smoking, drug and alcohol addiction, cluster headaches, and cancer-related or other end-of-life psychological distress"
        _id: 123456789
    }
]
```

## Add an entheogen

Send a POST request to URL `/entheogens/` with the following info:

```
name: string,
plantSource: string,
psychoactiveChemical: string,
dosage: string,
healingApplications: string,
```

## Remove an entheogen

Send a DELETE request to `http://localhost:3000/entheogens?_method=DELETE` with the following info:

```
id: string,
name: string,
plantSource: string,
psychoactiveChemical: string,
dosage: string,
healingApplications: string,
```

## Edit entheogen's info

Send a PUT request to `http://localhost:3000/entheogens?_method=PUT` with the following info:
```
id: string
```

# Authentication

## Sign Up

Send a POST request to `http://localhost:3000/sign-up` with the following info:
```
username: string,
password: password
```

## Login

To log in, send a POST request to `http://localhost:3000/login`

Use these headers with these data types:
```
username: string,
password: password
```

## Logout

Send a GET request to `http://localhost:3000/logout`