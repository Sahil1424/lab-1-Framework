import passport from "passport";
import User from "..models/User";

export default (app) => {
    passport.use(User.createStrategy());
    passport.serializeUser(User.serializeUser());
    passport.deserilizeUser(User.deserilizeUser());

    app.use(passport.initializer());
    app.use(passport.session());

    app.use((reg,res,next)=>{
        res.locals.isAdmin=reg.user?.role==="ADMIN";
        res.locals.isUser=reg.user?.role==="USER";
    })
    
    
}