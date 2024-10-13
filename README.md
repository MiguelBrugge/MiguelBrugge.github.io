# Miguel's Portfolio
Welcome to my portfolio! This website showcases my skills, and it's also a demonstration of those skills in action. The website uses React as the front-end library. One of the unique aspects of this portfolio is that the content is based on a JSON file. This data file primarily contains projects, which are dynamically displayed on the website.

Here's your text with corrections:

# How to Modify It
In `data.json`, you will find 3 objects: `user`, `settings`, and `projects`. Let's start with `user`.

## User
The `user` object contains all the data about the person for whom this portfolio is created. It includes their email and social links for the contact page.
```json
"user": {
    "email": "",
    "linkedIn" : "",
    "github": "",
    "twitter": "",
    "instagram": ""
},
```

## Settings
The settings are very simple. It only contains 1 setting, which is to define how many projects you want to display by default. The other projects will only be displayed when the user clicks on 'view all'.
```json
"settings": {
    "maxProjects": 4
},
```

## Projects
The `projects` object is the most significant and crucial object for a portfolio site because without it, there will be no projects displayed. I will go over some of its attributes because most must speak for themselves.
```json
"projects": [
    {
        "type": "3D Modeling",
        "image": "https://picsum.photos/500/300?random=69",
        "image2": "https://picsum.photos/500/300?random=69",
        "image3": "https://picsum.photos/500/300?random=69",
        "alt": "Project Alpha Image",
        "title": "3D Modeling",
        "description": "This is a description of Project Alpha, showcasing innovative approaches to problem-solving in technology.",
        "pageDescription": "This is a description of Project Alpha, showcasing innovative approaches to problem-solving in technology. This is a description of Project Alpha, showcasing innovative approaches to problem-solving in technology.",
        "labels": ["Technology", "Innovation", "Alpha"],
        "link1": {
            "name": "Github",
            "link": "https://Github.com"
        },
        "link2": {
            "name": "Youtube",
            "link": "https://youtube.com"
        }
    }
]
```
**Type:**
- If none is defined, then it's a related project. If it is defined, it's a non-related project, like a side project.

**Image:**
- This can be a link to an image online or inside the repository. You can add images up to 5 by adding them as attributes of this project object. They will be inside a carousel on their page.

**Page Description:**
- It's a longer description than 'description'; it's used on the project's page.

**Labels:**
- These can be the language or technologies used for the making of the project.

**Links:**
- These links can lead to anywhere. They are positioned on the project's page and are used to showcase more of your project.
