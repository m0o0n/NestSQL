SELECT
    users.name,
    users.email,
    COALESCE(
        json_agg(
            json_build_object(
                'id:',
                todos.id,
                'title',
                todos.title,
                'description',
                todos.description
            )
        )
    ) AS todos
FROM
    users
    LEFT JOIN todos ON users.id = todos.user_id
GROUP BY
    users.id