# Journey Wise API
![Image description](https://images.unsplash.com/photo-1528518290605-1fcc8dcca204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60)

This API allows authenticated users to access and post much needed information about entheogenic substances so that others have access to valid, pertinent and vital information before they ingest these substances.

## Description

Entheogens are defined as chemical substances, usually from plants, that produce non-ordinary states of consciousness upon ingestion for religious or spiritual purposes. These substances are sometimes referred to as "psychedelics" as well as "sacred plant medicines." Outdated research and experimentation from the 1950s, 60s, and 70s comprises a considerable amount of what both scientists and the general public think they know about the potential risks of entheogenic/psychedelic  substance use. Unfortunately, this body of knowledge includes studies that wouldn’t meet today’s scientific standards and many stem from urban legends as well as sensational, unsubstantiated news stories. Sacred plant medicines are regarded as highly beneficial to many indigenous cultures throughout the world and psychedelics are used to enhance people’s experience of their own consciousness and awareness. Do to the stigmatization and marginalization of individuals and groups who use these substances, many people use them in uninformed, risky, and dangerous ways because of their fear of judgement and intolerance. This api provides valuable information about these substances, including dosages and applications in order create a healing culture of acceptance in mainstream culture around the potentially beneficial nature of use of these substances and indigenous healing modalities.


## Installation for local hosting

To install this API, clone the repo, open terminal and run this command in that directory.

```bash
npm install
```

Then run:

```bash
npm start
```

If using on localhost:3000 - replace the `https://journeywise-amg.herokuapp.com` in the following instructions with `localhost:3000`

# How to Make Requests Using Postman

Postman:
Postman is a very powerful HTTP client that is used for testing, documenting and developing APIs.

1- Install Postman from their website.
2- Create an account
3- Once you've signed-up for an account for this API (authentication process outlined below), copy and paste your authenticated token into the Header in Postman in order to CRUD a resource
3- Make the corresponding requests that match the action that you're taking with the routes provided
4- Add the appropriate values into the data keys in the Body to CREATE or UPDATE a resource
5- Enjoy!

## Entheogen resource: 

## Get all entheogens

Send a GET request to URL `https://journeywise-amg.herokuapp.com/entheogens/` to get a list of all entheogens.

Data will look lke:
```json
[
    {
        "tribes": [{'tribeObjectId'}],
        "name": "Mushrooms",
        "plant source": "Psilocybe cubensis",
        "psychoactiveChemical": "psilocybin",
        "dosage": "1-5 grams",
        "healingApplications": "PTSD, depression, obsessive-compulsive disorder, quitting smoking, drug and alcohol addiction, cluster headaches, and cancer-related or other end-of-life psychological distress"
    }
    {
        "tribes": [],
        "name": "Ayahuasca",
        "plantSource": "Banisteriopsis caapi and Psychotria viridis",
        "psychoactiveChemical": "DMT",
        "dosage": ".25-1.5 ounces",
        "healingApplications": "suicide prevention, depression, anxiety, panic and symptoms related to trauma, drug and alcohol addiction treatment"
    }
]
```

## Get a specific entheogen by id

Send a GET request to URL `https://journeywise-amg.herokuapp.com/entheogens/ID_HERE` to get a single entheogen

Data will look like:
```json
[
    {
        "_id": "5e5dac35c27f10da13743f17",
        "tribes":[],
        "name":"Mushrooms",
        "plantSource": "Psilocybe cubensis",
        "psychoactiveChemical": "psilocybin",
        "dosage": "1-5 grams",
        "healingApplications": "PTSD, depression, obsessive-compulsive disorder, quitting smoking, drug and alcohol addiction, cluster headaches, and cancer-related or other end-of-life psychological distress",
        "updatedAt": "2020-03-03T01:00:37.557Z",
        "createdAt": "2020-03-03T01:00:37.557Z",
        "__v": 0
    }
]
```

## Add an entheogen

Send a POST request to URL `https://journeywise-amg.herokuapp.com/entheogens/new` with the key-value pairs in the Body:

```
name: string,
plantSource: string,
psychoactiveChemical: string,
dosage: string,
healingApplications: string,
```

## Edit entheogen's info

Send a PUT request to `https://journeywise-amg.herokuapp.com/entheogens/ID_HERE/put` with the updates that you'd like to make to the following data fields in the Body:

```
name: string,
plantSource: string,
psychoactiveChemical: string,
dosage: string,
healingApplications: string
```

## Remove an entheogen

Send a DELETE request to `https://journeywise-amg.herokuapp.com/entheogens/ID_HERE/delete`

Your response will be:
```
entheogen deleted
```

## Tribe resource: 

## Get all tribes associated with specific entheogen

Send a GET request to URL `https://journeywise-amg.herokuapp.com/entheogens/entheogenID_HERE/tribe` to get a list of all tribes.

Data will look lke:
```json
[

    {
        "tribe": {
        "_id": "5e6318149e610b000419a20b",
        "region": "Acre, Brasil",
        "name": "Huni Kuin",
        "updatedAt": "2020-03-07T03:42:12.657Z",
        "createdAt": "2020-03-07T03:42:12.657Z",
        "__v": 0
        }
    }
    {
        "tribe": {
        "_id": "5e6318149e610b000419a20b",
        "region": "Amazonia, Brasil",
        "name": "Yawanawa",
        "updatedAt": "2020-03-07T03:42:12.657Z",
        "createdAt": "2020-03-07T03:42:12.657Z",
        "__v": 0
        }
    }
]
```
## Add a tribe to an entheogen

Send a POST request to URL `https://journeywise-amg.herokuapp.com/entheogens/entheogenID_HERE/tribe/new` with the key-value pairs in the Body:

```
name: string,
region: string,
```

## Get one tribe

Send a GET request to URL `https://journeywise-amg.herokuapp.com/entheogens/entheogenID_HERE/tribe/tribeID_HERE` to get one tribe.

Data will look lke:
```json
[

    {
        "tribe": {
        "_id": "5e6318149e610b000419a20b",
        "region": "Acre, Brasil",
        "name": "Huni Kuin",
        "updatedAt": "2020-03-07T03:42:12.657Z",
        "createdAt": "2020-03-07T03:42:12.657Z",
        "__v": 0
        }
    }

]
```
## Edit one tribe's info

Send a PUT request to `https://journeywise-amg.herokuapp.com/entheogens/entheogenID_HERE/tribe/tribeID_HERE/put` with the updates that you'd like to make to the following data fields:

```
name: string,
region: string,
```
## Remove one tribe

Send a DELETE request to `https://journeywise-amg.herokuapp.com/entheogens/entheogenID_HERE/tribe/tribeID_HERE/delete`

Your response will be:
```
Entry deleted
```
# Authentication

## Sign Up

Send a POST request to `https://journeywise-amg.herokuapp.com/auth/sign-up` with the following info:
```
username: string,
password: password
```

## Login

To log in, send a POST request to `https://journeywise-amg.herokuapp.com/auth/login`

Use these fields in the Body with these data with your unique token in the Headers:
```
username: string,
password: password
```
