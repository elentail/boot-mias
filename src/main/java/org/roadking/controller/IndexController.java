package org.roadking.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

	@RequestMapping("/test.do")
	public String doTest(Model model,
			@RequestParam(value="op",defaultValue="test")String operator){
		model.addAttribute("params",operator);
		return "mias";
	}
	@RequestMapping("/getname")
	public @ResponseBody List<String> sendData(){
		List<String> datas = new ArrayList<>();
		datas.add("RK");
		datas.add("SJ");
		datas.add("SUB");
		return datas;
	}
}
