package com.ssafy.bae.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.bae.api.dto.UserResDto;
import com.ssafy.bae.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final TokenService tokenService;
    private final UserRequestMapper userRequestMapper;
    private final ObjectMapper objectMapper;

    @Autowired
    UserRepository userDao;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        System.out.println("OAuth2SuccessHandler");
        OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
        System.out.println("OAuth2SuccessHandler OAuth2User : " + oAuth2User);
        Token token = null;

        if(!userDao.existsByUserId(oAuth2User.getName())){

            log.info("토큰 발행 시작");

            token = tokenService.generateToken(oAuth2User.getName(), "USER");
            log.info("{}", token);

            UserResDto user = new UserResDto(oAuth2User.getName(), token.getToken(), token.getRefreshToken(), "kakao");
            userDao.save(user.toEntity());
        } else {
            token = new Token(userDao.findByUserId(oAuth2User.getName()).getTokenId(),userDao.findByUserId(oAuth2User.getName()).getRefreshId());
        }

//        UserResDto user = new UserResDto(oAuth2User.getName(), "dagadsfgarfds", "kakao");
//        userDao.save(user.toEntity());

//        log.info("토큰 발행 시작");
//
//        token = tokenService.generateToken(oAuth2User.getName(), "USER");
//        log.info("{}", token);

        response.addHeader("Auth", token.getToken());
        response.addHeader("Refresh", token.getRefreshToken());
        response.setContentType("application/json;charset=UTF-8");

        writeTokenResponse(response, token);

//        String targetUrl = UriComponentsBuilder.fromUriString("http://localhost:3000/oauth/redirect")
//                .queryParam("email", oAuth2User.getName())
//                .build().toUriString();
//        log.info(targetUrl);
//        getRedirectStrategy().sendRedirect(request, response, targetUrl);

//        targetUrl = UriComponentsBuilder.fromUriString("/home")
//                .queryParam("token", "token")
//                .build().toUriString();
//        getRedirectStrategy().sendRedirect(request, response, targetUrl);
//        UserDto userDto = userRequestMapper.toDto(oAuth2User);
//
//        // 최초 로그인이라면 회원가입 처리를 한다.
//
//        Token token = tokenService.generateToken(userDto.getEmail(), "USER");
//        log.info("{}", token);
//
//        writeTokenResponse(response, token);
    }

    private void writeTokenResponse(HttpServletResponse response, Token token)
            throws IOException {
        response.setContentType("text/html;charset=UTF-8");

        response.addHeader("Auth", token.getToken());
        response.addHeader("Refresh", token.getRefreshToken());
        response.setContentType("application/json;charset=UTF-8");

        var writer = response.getWriter();
        log.info(response.getHeader("Auth"));
        writer.println(objectMapper.writeValueAsString(token));
        writer.flush();
    }
}
