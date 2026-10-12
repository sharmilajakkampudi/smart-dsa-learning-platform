
package com.anurag.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http
            .cors(cors -> cors.configurationSource(request -> {
                CorsConfiguration config =
                        new CorsConfiguration();

                config.setAllowedOrigins(
                        List.of("http://localhost:5173"));

                config.setAllowedMethods(
                        List.of("GET", "POST", "PUT",
                                "DELETE", "OPTIONS"));

                config.setAllowedHeaders(
                        List.of("Content-Type", "X-Requested-With"));

                config.setAllowCredentials(true);

                return config;
            }))
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(
                    SessionCreationPolicy.IF_REQUIRED))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/auth/login",
                    "/api/auth/register",
                    "/api/auth/logout",
                    "/api/questions",
                    "/api/questions/**",
                    "/api/progress/**"
                ).permitAll()
                .anyRequest().permitAll()
            );

        return http.build();
    }
}
