package org.website.payroll;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PayrollController {


    @GetMapping("/PAYROLLSTUB")
    public String PAYROLLSTUB() {
        return "PAYROLLSTUB"; // 
    }

    @GetMapping("/PAYROLLMAIN")
    public String PAYROLLMAIN() {
        return "PAYROLLMAIN"; // 
    }

}
