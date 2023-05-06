class Admin extends User{
    
    //admin creates a manual match
    createMatch(mentee, mentor){
        mentee.setMentor(mentor);
        mentor.setMentee(mentee);
    }

    //admin deletes a match
    deleteMatch(mentee, mentor){
        mentee.setMentor(null);
        mentor.setMentee(null);
    }

    //admin views a mentor's profile
    viewMentorProfile(){

    }

    //admin views a mentee's profile
    viewMenteeProfile(){

    }

    //returns a list of all the feedback given
    getFeedback(){

    }

}