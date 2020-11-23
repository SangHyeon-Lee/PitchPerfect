Chan Hee Lee, Sang Hyeon Lee, Sujin Han, Yewon Kim  
Team Name: FYEESH

---

# Hi-Fi Report

## 1. Project Summary

Due to the pandemic, people with musical interests, especially amateurs who don’t have associated music groups, cannot participate in collaborative music sessions and there do not exist communication tools fit for remote music collaboration. To solve this problem, we propose PitchPerfect, a platform where amatuer musicians can easily find suitable collaborators and form groups to create music together remotely. Unique features of PitchPerfect include (1) personal profile page designed so that other musicians can get a sense of what kind of musician that person is in one glimpse, and (2) communication tools designed specifically for musical collaboration, such as (2-a) shared annotatable sheet music, (2-b) commenting threads that can be pinned on the shared sheet music, and (2-c) music term dictionary.

---

## 2. Instructions

1. When you go to our prototype URL, you’ll be navigated to the **main page** of our project. Please **sign in** with the given account. (ID: test, PASSWORD: test)
    1. You can also choose to **sign up**. The information you fill in here will be displayed in that account’s **personal profile page**. At this point, you should upload your profile image.
2. Once you are signed in, you’ll be in your project library page. You’ll be able to see a list of ongoing projects that you are a part of and a list of completed projects that you participated in previously. 
    1. By clicking on any of the projects below “Projects in Progress” or “Previous Projects", you can navigate to the **team project page** for that team. (explained more in 5)
    2. By clicking the **“Find projects” button**, you are navigated to the **ongoing projects page**, which contains a list of all ongoing projects in PitchPerfect. (explained more in 3)
    3. The navigation bar at the bottom of your screen helps you to navigate quickly to the page you want.
        1. The first **“home” icon** takes you to your **library page**.
        2. The second **“search” icon** takes you to the **ongoing projects page**. (explained more in 3)
        3. The third **“plus” icon** takes you to the **team formation page**. (explained more in 13)
        4. The fourth **“profile” icon** takes you to your **personal profile page**. The information in this page is filled with the information provided during the signup process.
3. In the **ongoing projects page**, you can see a list of all ongoing projects in PitchPerfect. The projects that you are already part of are excluded. For each project, you can see (1) team name, (2) title of music the team is collaborating on, (3) parts/instruments involved, (4) which parts/instruments are filled, and (5) difficulty of the project. By clicking the **“view” button** in any one of the projects, you can go to the **project summary page** for that project.
4. In the **project summary page**, you can see a short description for the project and the members involved in the project.
    1. By clicking at the **profile images** above each member’s names, you can view the personal profile of each member.
    2. By clicking the **“join” button**, you can send a join the team. (We’re planning on making the teams accept the join requests for people to join the team. However, this feature is not implemented yet.)
5. (If you are following the instructions sequentially nad using test account we provided, please navigate back to your project library page by clicking the “home” icon in the navigation bar and click project **“Coldplay”** or **“dlwlrma”**.) In the **team project page**, you can navigate to various pages related to the project.
    1. You can view **Announcements** on this page. Each team can decide on their own method to send/receive recordings and merge them to create a final product. The most convenient method probably will be to post a Google Drive link here.
    2. You **can move the pins** on the sheet music. The location of each pin is saved to our database every time you move, so when you refresh the page or other members visit this page, the change in pins will be displayed in changed positions. Please move the pins around by dragging on the **red pin image**, not the text. Also, you can navigate to the associated **comment thread page** by clicking the *“view  #n” text* below each pin (explained more in 10). There’s a bug with position change with scrolling, so the y-coordinate of the pins may not be accurate.
    3. By clicking the **“sheet music” button**, you can go to the shared **sheet music page** for this project. (explained more in 6)
    4. By clicking the **“View All Threads” button**, you can go to the **all threads page** for this project. (explained more in 8)
    5. By clicking the **“wait list” button**, you can go to the **wait list page** for this project. This page will contain the list of pending join requests.
    6. By clicking the **“End Collaboration” button**, you can end this project and go to **end collaboration** page where you can select the best collaborators and report trolls. (explained more in 11)
6. In the **shared sheet music page**, you can access various features.
    1. By clicking the **pencil icon** on bottom left, you can annotate the shared sheet music. (There is a bug on this page. If you can’t see the sheet music right away, please click back and click on the icon again.)
    2. By clicking the **comment box icon** next to the pencil icon, you can navigate to the **all threads page**. (explained more in 8) 
    3. By clicking the **dictionary icon** next to the comment box icon, you can navigate to the music term dictionary page. (explained more in 9)
    4. By clicking any of the **pin icons** on the shared sheet music, you are navigating to the associated **comment thread page**. (explained more in 10)
7. In the annotations page, **you might not be able to see the sheet music loaded or you may see the wrong image**. 
If this happens, please click the **back button** in the chrome browser and access the page again. 
You should be able to see the music sheet in the annotations page now. There are 4 options to modify the music sheet: 
**draw, shape, icon, and text**. With **draw**, you can select the size and color of the stroke and freely draw anything on the music sheet. 
With **shape** and **icon**, you can add some shapes to the image. 
With **text**, you can add a text box to the music sheet. After you finish your annotation, press save to save all of your annotations and view them later.
8. In the **all threads page**, you can view the list of all comment threads on the page and navigate to associated comment thread pages.
9. In the **music term dictionary page**, you can search for music terms which may be confusing. You can either search by typing the name, abbreviation, or the meaning of the term. After typing, click “search” to find the corresponding terms. Right now, our dictionary is case-sensitive.
10. In the **comment thread page**, you can view the comments related to the specific location where the pin is located. You can also submit comments. In order to view newly submitted comments, you have to refresh the page.
11. In the **end collaboration page**, you can choose the teammates who you think worked well, it will increment the heart(reputation point) in their profiles. 
    1. You can report trolls or people who disturbed teamwork by clicking the **report button**. You can choose who to report and leave comments.
12. When you end the collaboration, your project now is in the previous projects area.
13. In the **team formation page**, you can add a new project. You will first have to verify your team name, 
as you cannot use the same name with other teams. Then, in the “music to play” section, type in the title of the 
music that you want to play. Next, you should upload the image file of the music sheet. After you select the expected 
proficiency for your team and write some introductions for your team, click register to **register** your team.


---

## 3. Prototype

**Link to prototype:**  
https://www.figma.com/proto/MEWq66aMsawN06hApETGEM/Scenario-2?node-id=30%3A4&viewport=150%2C-84%2C0.654498279094696&scaling=contain

<br>

### 3.1 Prototyping Tool

**Prototyping tool used:** Figma  

**_Why did we use Figma?_**  
First, one of us had experience in using Figma, so we decided to use it. Strong advantages of Figma are: i) it provides intuitive and easy-to-use prototyping tools, providing transitions between frames, ii) it supports strong real-time collaboration, and iii) sharing prototypes is extremely easy; sharing a link solves everything. 

**_What worked well?_**  
Creating connections between frames in a prototype is straightforward and easy to implement.
No extra installation was needed. We were able to use Figma in the web right away
Real time collaboration was really effective and easy. In specific, we were able to see each other’s mouse pointers and easily observe what each of us were working on.

**_What did not work well?_**  
With Figma’s default setting, it was hard to find suitable frames or designs that are required for our project.
There is no image or object editing tool, so we had to use some external software (e.g. Adobe Illustrator) to edit the images and put it in our prototype.
There were some technical issues like not being able to resize multiple objects at once or not being able to preview text styles.

<br>

### 3.2 Design Choices

**_What we chose not to implement in the prototype:_**  
- All typing features (announcement, searching in dictionary, commenting in threads, etc.)
    - We hard-coded these features since typing and input processing are hard to implement in prototypes. Yet, testers will be able to understand how they work without typing experiences. 
- Making a team
    - This feature is not directly related to our task, so we created and used an imaginary team for better flow in user experience
- Uploading and merging recordings, playing the merged recordings
    - These features are only shown as buttons since the functionalities are impossible to implement in Figma prototype.
    - Especially, merging recordings is too technical and goes beyond the scope of social computing. 
- Annotating in sheet music
    - This feature is not possible to implement or requires too much extensive work in prototyping platforms.
- Server-related features (sign up and sign in)
    - Sign up procedure is shown by a layout; again, users would be able to understand how it works without any typing experiences. Also, since we don’t have any servers connected, inputs cannot be processed, so we just skipped the procedure. 
- Showing personal profile
    - We omitted showing the account owner’s personal profile since testers would be able to understand how the profile page looks like by looking at the profile page of a team member: Ornn in the prototype.
- Accepting members in the waitlist
    - Implementing this functionality would cause confusions; we wanted to concentrate on how teammates collaborate to produce music, not how teammates discuss to accept waiting members. 

<br>

### 3.3 Representative Screenshots  

**Screenshot 1: Page containing a list of ongoing projects in PitchPerfect.**  
<img src="./images/frame10.png" width="300"/>  

<br>

**Screenshot 2: Project summary page for team FYEESH.**  
<img src="./images/frame11.png" width="300"/>  

<br>

**Screenshot 3: Personal profile page for Ornn.**  
<img src="./images/frame13.png" width="300"/>  

<br>

**Screenshot 4: Shared full score page for Happy Birthday song.**  
<img src="./images/frame2.png" width="300"/>  

<br>

**Screenshot 5: Music term dictionary page.**  
<img src="./images/frame5.png" width="300"/>  

<br>

**Screenshot 6: Page where user submit ratings of teammates and optionally write last words to teammates.**  
<img src="./images/frame15.png" width="300"/>  

<br>

### 3.4 Instructions
1. From the first screen, you can either go straight to the library page by clicking **“Sign In” button** or view the sign up page by clicking the **“Sign Up” button** and click the **“Submit” button** to go to the library page.
2. From the library page, click the **“Find Projects” button** to view the list of ongoing projects. You can also click the **search icon at the bottom** to access the same page.
3. From the page containing a list of ongoing projects (screenshot 1), click the **“join” button** next to the Happy Birthday project (the first one in the list) to go to that team’s project summary page (screenshot 2).
4. In the project summary page (screenshot 2), you can navigate to the personal profile page of “Ornn” (screenshot 3) by clicking **the icon above “Ornn.”** You can also go join the team and navigate to the Happy Birthday project page by clicking the **yellow “join” button**.
5. From the Happy Birthday project page, you can navigate to multiple pages.
    1. By clicking the **“Back” button**, you can navigate back to your library page and check that a new project is added.
    2. By clicking the **“SHEET MUSIC” button**, you can navigate to the shared full score page (screenshot 4) containing annotations. This page is explained in more detail in 6.
    3. By clicking the **“ANNOUNCEMENTS” button**, you can navigate to the page containing announcements for the project.
    4. By clicking the **“Wait list” button**, you can navigate to the page containing people who want to join the project.
    5. By clicking the **“Invite” button**, you can navigate to the page containing the link that can be used to invite other musicians to this project.
    6. By clicking the **“End Collaboration" button**, you can navigate to the page with the message “Congratulations…”. This page is explained in more detail in 7.
6. You can preview multiple features from the shared full score page (screenshot 4).
    1. By clicking the **dictionary icon on the top**, you can navigate to the music term dictionary page containing definitions of key music terms (screenshot 5). You can search for musical terms here.
    2. By clicking the **text box icon** next to the dictionary icon, you can navigate to the announcements page. Any important notifications will be organized in this page.
    3. By clicking **any of the pin icons**, you can view the comment thread associated with that part of the music. Here you and your teammates can discuss the musical details.
7. From the page containing the “Congratulations…” message, you can navigate to the rating page (screenshot 6) by clicking the **“Rate Collaborators” button**. 
8. The rating page (screenshot 6) contains the preview of how users will rate collaborators and (optionally) write any last words to each of the collaborators. If you click the **“Submit Rating” button**, you are taken to the page containing “Thank you…”
9. From the page containing “Thank you…”, you can navigate back to your library page and find that Happy Birthday is now moved to the Previous Projects section.
10. If you click the **Happy Birthday project button** and click the **image icon for “Ornn,”** you are taken to Ornn’s personal profile page again.

---
## 4. Observations

### 4.1 Participant Information
Number of Participants: 8
- P1: Intermediate Violin Player. Prefers playing in orchestra or in quartet.
- P2: Intermediate Trombone Player. Prefers playing in an orchestra.
- P3: Intermediate Saxophone and Guitar Player. Preferes playing in band sessions and concerts.
- P4: Starter Guitar Player. Prefers playing in band sessions and concerts.
- P5: Intermediate drum player. Prefers playing in band sessions and concerts.
- P6: Intermediate piano player. Hopes to accompany singers.
- P7: Starter Acoustic Guitar Player. Prefers playing in quartet.
- P8: Intermediate Violin Player. Prefers playing in a band.

<br>

### 4.2 Usability Problems

**UI Design**
1. It was unclear what the stars in the personal profile page is for.  (P1, P6): _medium_
> We can solve this problem by adding a short description of the rating in the personal profile page. However, we are planning on getting rid of the rating system (mentioned in #7).
2. I did not understand what the waitlist page was for before the instruction was given. (P1, P7): _low_
>This is likely to be because we did not implement the accepting members functionality and made the app navigate to the project page right after pressing the “join” button. This confusion will be cleared if we implement the accepting members functionality.
3. When browsing through the prototype before hearing instructions, I did not think the pin icons on the music sheet page would contain important information. (P2, P8): _low_
> We can make the pin more noticeable by changing its color or adding illuminating graphics.
4. The sheet music page did not support magnification. (P2): _low_ 
> This is a highly technical issue, so we will try to address this if we have some extra time.

<br>

**Personal Profile**

5. In the user profile, it was hard to understand the skill level of the musician right away. The terms are subjective. (P1): _high_
> First, we think terms noob, starter, and intermediate are not intuitive; instead, we will replace them with more explicit terms such as skill level 1, 2, and 3. Second, since the terms are subjective, we plan to give users guidelines of the skill level when they sign up. Tentatively, skill level 1 would be people who don’t have any collaboration experiences; skill level 2 would be people who have collaboration experiences but are not confident with their instrument skills; skill level 3 would be people who have collaboration experiences and are confident with their instrument skills. The guidelines would be more specified at the development stage.
6. Noob, starter, intermediate tags do not seem sufficient to tell the person’s proficiency. It would’ve been nice if the personal profile page included a sample recording of the player. (P6): _medium_
> We hope the changes made to the skill level system above will clear up the confusion and ambiguities. We’ll consider adding sample recording in the personal profile if we have time.
7. If one’s skill improves after making his / her profile by joining in multiple collaborative sessions, then the skill level of a player will be inaccurate. (P4, P5): _medium_
> This is a problem that could occur in the long-term aspect of the application usage. We plan to enable users to edit their skill levels and instruments afterwards.

<br>

**Reputation System**  

8. The rating system seems a bit harsh. People might get their feelings hurt when the ratings they receive are different from their expectations. (P6, P8): _high_
> We plan on replacing the rating system with reporting functionality and badge functionality. For reporting system, users can report trolls and the system will suspend such trolls if the majority of teammates report this troll user. For the badge system, users may leave good remarks at the end of the collaboration, and such received remarks will be shown in users’ profile as a reputation system. For instance, each user can give their teammates praise cards of “best player”, “best listener”, and “best time manager”. For users who received a certain amount of such praise cards, badges will appear at their profile page.

<br>

**Project Management**  

9. The role of members in the team is unclear. It is unclear who will do the merging of recordings or who can accept/reject people in the waitlist page. (P1): _low_
> We will implement the roles of teammates later to clarify who’s the leader of the team and who has the editing permission, etc.
10. There may be potential problems with recording for some instruments. For example, trombones notes are too low to be recorded well. (P2, P8): _low_
> This is also a technical problem, so this goes beyond the scope of social computing.
11. Merging process will need some guidance to ensure quality and prevent trolling. (P1, P4): _low_
> We are not planning to implement the recording and merging features ourselves, since it is beyond the scope of social computing. We are not focusing on ensuring the quality of the merged music, but the communication aspect of the project before they merge music. 
12. Uploading recordings and listening to recordings will take a long time. It would be nice if the app supported live collaboration sessions. (P3, P5, P8): _low_
> The problem that we identified is that it is hard to participate in online sessions due to internet connection problems and time difference between countries. Thus, supporting live collaboration sessions seems to be out of scope of our project. 

<br>

---

## 5. Appendix

**Questions that we asked participants are the following.**

0. Background information about participants
    1. What instruments do you play? Proficiency? (Noob, starter, intermediate)
    2. Have you participated in a musical collaboration activity before COVID’19? If yes, what kind of collaboration were you involved in?
    3. After COVID’19, did your musical collaboration activity decrease? If decreased, what is the extent of decrement? 
    4. Would you like to participate in the remote musical collaboration session if it is available?
    5. What kind of musical collaboration would you prefer to join, if the collaboration is available online? e.g. band, chorus, orchestra, quartet, …
    6. If you already have an experience of remote musical collaboration, what platform did you use, and how was the experience? Was communication between collaborators easy? What were the disadvantages?

1. Participants walk through the application **without** any instructions.
    1. What do you think this application is for?
    2. Are there any features that are confusing or ambiguous?

2. Participants walk through the application **with** the instructions for using the app.
    1. Did your comprehension of the application change after you read the instruction? In other words, is the application easy to comprehend? Any suggestions to improve the design or to add some features?
    2. Is the application appropriate for the type of collaboration you want to join? If not, what makes it difficult to use it?
    3. What are some things that you like about our prototype?
    4. As an amateur musician, what are possible problems that might happen when using the app? If you answered 0-6, would our application solve the existing problems with currently available platforms?
    5. Do you think our app is sufficiently interesting? Would you continue to use this app if the service is available? 

