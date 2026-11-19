package com.safewell.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    private void addSharedContent(Model model, String activePage) {
        model.addAttribute("activePage", activePage);
        model.addAttribute("businessName", "S.S. Industries");
        model.addAttribute("proprietor", "Anjana Sahoo");
        model.addAttribute("brandName", "Safewell");
        model.addAttribute("location", "Jagatsinghpur, Odisha");
    }

    @GetMapping("/")
    public String home(Model model) {
        addSharedContent(model, "home");
        return "index";
    }

    @GetMapping("/about")
    public String about(Model model) {
        addSharedContent(model, "about");
        return "about";
    }

    @GetMapping("/our-story")
    public String story(Model model) {
        addSharedContent(model, "story");
        return "our-story";
    }

    @GetMapping("/women")
    public String women(Model model) {
        addSharedContent(model, "women");
        return "women";
    }

    @GetMapping("/manufacturing")
    public String manufacturing(Model model) {
        addSharedContent(model, "manufacturing");
        return "manufacturing";
    }

    @GetMapping("/product")
    public String product(Model model) {
        addSharedContent(model, "product");
        return "product";
    }

    @GetMapping("/impact")
    public String impact(Model model) {
        addSharedContent(model, "impact");
        return "impact";
    }

    @GetMapping("/partnerships")
    public String partnerships(Model model) {
        addSharedContent(model, "partnerships");
        return "partnerships";
    }

    @GetMapping("/contact")
    public String contact(Model model) {
        addSharedContent(model, "contact");
        return "contact";
    }
}
