"use strict";export class ValidatorEngine{static validate(t,e){return t?{isValid:!0}:{isValid:!1,msg:e}}static required(t,e="Required"){return ValidatorEngine.validate(String(t).length>0,e)}static pattern(t,e,r="Invalid pattern"){return ValidatorEngine.validate(new RegExp(t).test(e),r)}static min(t,e,r="Minimum value expected: {min}"){return ValidatorEngine.validate(e>=t,r.replace("{min}",String(t)))}static max(t,e,r="Maximum value expected: {max}"){return ValidatorEngine.validate(e<=t,r.replace("{max}",String(t)))}static url(t,e="Invalid URL"){return ValidatorEngine.pattern("^https?://.+..+",t,e)}static email(t,e="Invalid email"){return ValidatorEngine.pattern(".+@.+..{2,8}",t,e)}static password(t,e="Password not strong enough"){return ValidatorEngine.pattern("^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$",t,e)}static minLength(t,e,r="Minimum characters expected: {min}"){return ValidatorEngine.validate(e.length>=t,r.replace("{min}",String(t)))}static maxLength(t,e,r="Maximum characteres expected: {max}"){return ValidatorEngine.validate(e.length<=t,r.replace("{max}",String(t)))}static decimal(t,e="Decimal value expected"){return ValidatorEngine.validate(String(t).includes("."),e)}static alpha(t,e="Alphabetics characters only"){return ValidatorEngine.pattern("^[a-zA-Z]+$",t,e)}static alphanum(t,e="Alphanumeric characters only"){return ValidatorEngine.pattern("^[a-zA-Zd]+$",t,e)}static minDate(t,e,r="Must be recent than {min}"){return ValidatorEngine.validate(new Date(t).getTime()<new Date(e).getTime(),r.replace("{min}",new Date(t).toLocaleDateString()))}static maxDate(t,e,r="Must be recent than {max}"){return ValidatorEngine.validate(new Date(t).getTime()>new Date(e).getTime(),r.replace("{max}",new Date(t).toLocaleDateString()))}}