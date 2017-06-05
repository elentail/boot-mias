package org.roadking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexController {

	@RequestMapping("/test.do")
	public String doTest(Model model,
			@RequestParam(value="op",defaultValue="test")String operator){
		model.addAttribute("params",operator);
		return "test";
	}
}
