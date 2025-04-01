package org.likelion.simplememo2.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class MemoController {
    @GetMapping("/josg123")
    public String josg123() {
        return "안녕하모니카";
    }
}
