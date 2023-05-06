class Mentee extends User{

    //view a selected mentor's profile
    viewMentorProfile(mentor){

    }

    //Find a match and return an array of compatible mentors
    findMatch(mentors){
        mentors.map((obj)=>{
            const matchThreshold = 75;
            let filteredMentors = [];
            let match  = 0;
            if (mentors.Mentor.profile.fieldOfWork == this.profile.fieldOfWork){
                match += 50;
            }
            if (mentors.Mentor.profile.requirements == this.profile.requirements){
                match += 25;
            }
            if (mentors.Mentor.profile.FDMRole == this.profile.FDMRole){
                match += 25;
            }
            if (match >= matchThreshold){
                filteredMentors.push(mentors.Mentor);
            }
        });
        return filteredMentors;
    }

    //send a match request to a mentor
    sendMatchRequest(){

    }

    //give feedback (on the app? or on the mentee?)
    giveFeedback(){
        return feedback;
    }


    //unmatch with current mentor
    unmatch(){

    }

    //accept a match request received by a mentor
    acceptMatch(){
        return success;
    }

    //setter to add mentor attribute to mentee object
    setMentor(mentor){
        this.mentor = mentor;
    }

    //getter for mentor attribute
    getMentor(){
        return this.mentor;
    }


    //setter for profile attribute
    setProfile(education, workExperience, fieldOfWork, requirements){
        this.profile = new Profile(education, workExperience, fieldOfWork, requirements);
    }

    //getter for profile attribute
    getProfile(){
        return this.profile;
    }
}