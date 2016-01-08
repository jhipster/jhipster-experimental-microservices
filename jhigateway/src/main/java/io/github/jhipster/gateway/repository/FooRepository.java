package io.github.jhipster.gateway.repository;

import io.github.jhipster.gateway.domain.Foo;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Foo entity.
 */
public interface FooRepository extends JpaRepository<Foo,Long> {

}
