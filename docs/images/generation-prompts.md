# Prompturi pentru diagrama bazei de date

Generare și corectare: instrumentul integrat ImageGen.

## Generare

Use case: infographic-diagram. Create a highly legible professional database ER diagram in Romanian for a beginner's StockMarket project. This is a clean technical teaching image for a GitHub README, landscape, high resolution, white background, crisp large typography, understated navy headings, green for implemented and dashed blue for planned. No decorative illustrations, no extra prose, no unnecessary icons, no watermarks. Prioritize exact readable text and unambiguous noncrossing connector lines.

Title: "StockMarket · Structura bazelor de date"
Subtitle: "Starea actuală + următorul pas: autentificarea"

Two distinct PostgreSQL database regions. LEFT about 38% of width: "trading · localhost:5434" and green badge "EXISTĂ". One solid green outlined table card titled "accounts". Exact rows:
"id                   UUID                 PK"
"user_id              UUID                 UNIQUE"
"currency             VARCHAR(3)           NOT NULL"
"cash_balance         NUMERIC(19,2)        NOT NULL"
"created_at           TIMESTAMPTZ          NOT NULL"
Small footer within card "Valori inițiale: USD · 10.000,00 · data creării"
All five fields NOT NULL; annotate globally under this card "Toate câmpurile sunt NOT NULL".

RIGHT about 58% width: heading "identity · localhost:5435", badge "BAZĂ CREATĂ · MOMENTAN GOALĂ". All table cards within this region have dashed blue borders and badge "DE IMPLEMENTAT". Layout: app_users top left of region, spring_session bottom left, spring_session_attributes bottom right. Enough horizontal margin between tables for labels.

Card "app_users" exact rows:
"id                   UUID          PK"
"email                VARCHAR(254)  UNIQUE"
"password_hash        VARCHAR(255)"
"created_at           TIMESTAMPTZ"
Small footer "Hash Argon2id · parola nu se salvează în clar"
All fields NOT NULL.

Card "spring_session" exact rows:
"primary_id            CHAR(36)      PK"
"session_id            CHAR(36)      UNIQUE"
"creation_time         BIGINT"
"last_access_time      BIGINT"
"max_inactive_interval INT"
"expiry_time           BIGINT"
"principal_name        VARCHAR(100)  NULL permis"
Small footer "Sesiuni administrate de Spring Session"
All fields NOT NULL except principal_name.

Card "spring_session_attributes" exact rows:
"session_primary_id    CHAR(36)      FK"
"attribute_name        VARCHAR(200)"
"attribute_bytes       BYTEA"
Small footer "PK compus: session_primary_id + attribute_name"
All fields NOT NULL.

Relationships:
1. Dashed curved blue connector from app_users.id to accounts.user_id, outside text and table boxes. Label exactly "1 utilizator → 0 sau 1 cont" and secondary smaller label "Referință logică · FĂRĂ FK între baze". This is PLANNED verification, not an implemented enforced relationship.
2. Dashed connector between app_users.email and spring_session.principal_name. Label "Email după login · legătură logică". Never label this a SQL foreign key.
3. Solid connector with crow foot from spring_session.primary_id to spring_session_attributes.session_primary_id. Label "1 sesiune → 0..N atribute · FK". Solid here denotes SQL FK inside planned tables, while dashed borders denote table status. Clearly match endpoints.
4. Outside database boxes, at the bottom, one tiny legend: "PK = cheie primară   UNIQUE = fără duplicate   FK = cheie externă". Also one short sentence "Acum există doar accounts. Cele 3 tabele albastre sunt planificate."
No Kafka, frontend, prices, reset tokens or invented database tables. Do not claim the planned tables already exist. Do not confuse user id with account id. Clean aligned rows, generous spacing, no clipped or overlapping text.

## Corectare

Edit this database diagram with precise technical corrections, preserving all colors, overall composition, all database/table names, ports, status badges, existing/planned distinction and all accurate text. Improve clarity only:
1. In spring_session, replace the misspelled row name "last_accesse_time" with EXACT "last_access_time".
2. The SOLID SQL FK line MUST originate at the center of the spring_session "primary_id" row, NOT at creation_time or session_id, and end at the spring_session_attributes "session_primary_id" row. It can use a clean right-angle route in the whitespace between the cards. Keep label "1 sesiune → 0..N atribute · FK", reposition it so text does not touch the line or tables.
3. The dashed line to accounts.user_id MUST start at the center of app_users "id" row, not email. Preserve label "1 utilizator → 0 sau 1 cont" and "Referință logică · FĂRĂ FK între baze".
4. REMOVE the short unlabeled dashed vertical arrow between app_users and spring_session. In the large empty upper-right area, add only this concise relationship annotation in large clear navy text:
"După login"
"spring_session.principal_name = app_users.email"
"Referință logică · fără FK"
This avoids an unlabeled misleading relationship. Keep it visually separate from tables. No replacement connector needed for this annotation.
All text must be exact and readable. No overlapping lines, no other invented tables or fields. This is a technical database diagram, not a decorative poster.


## Editarea arhitecturii finale

Instrument: ImageGen integrat.

Edit this exact StockMarket Platform architecture diagram. Make ONLY these editorial changes and preserve every architectural component, service, database, logo, endpoint, port, arrow, Kafka topic, and monitoring component:
1. Change the subtitle from "Arhitectura tinta · React · Spring Boot · FastAPI · Kafka · Docker Compose" to exactly "Arhitectura · React · Spring Boot · FastAPI · Kafka · Docker Compose". Remove the word tinta / țintă.
2. Remove the ENTIRE turquoise bottom-left banner, including target icon, heading beginning "SAPTAMANA ACEASTA", its pipeline text and the second line beginning "Restul componentelor". Replace this region with clean white background and harmonious spacing.
3. In the bottom-right legend card, KEEP the heading "Legendă" and the black and purple arrow keys and their labels "Negru: REST / SQL" and "Mov: evenimente Kafka". Remove ONLY the bottom note "Arhitectura propusa · Nu toate componentele sunt implementate." and its separator line. Resize the legend card neatly around just the retained legend.
4. Keep all other content unchanged. Do not add disclaimers, dates, implementation-status labels or new text. This is the clean final architecture document. Maintain the same professional white and pastel style, crisp legible typography, high resolution and complete uncropped content.

## Eliminarea marcajelor de progres din schema bazei

Instrument: ImageGen integrat.

Edit this exact database diagram. Remove all implementation-status and progress text while preserving the database structure and precise technical information.

Remove completely:
- The subtitle "Starea actuală + următorul pas: autentificarea".
- The green "EXISTĂ" badge.
- The blue "BAZĂ CREATĂ · MOMENTAN GOALĂ" badge.
- Every "DE IMPLEMENTAT" badge on the three tables.
- The bottom sentence "Acum există doar accounts. Cele 3 tabele albastre sunt planificate."

Keep the title "StockMarket · Structura bazelor de date", both database names and localhost ports, every table, every field and type, PK/UNIQUE/FK/NOT NULL constraints, relationship labels, Argon2id explanation, session explanation, initial account values, and the PK/UNIQUE/FK legend. Keep the explanatory block "După login" with the principal_name/email relationship.

Make the dashed outlines of the identity database and its three table cards SOLID blue, since outlines should no longer communicate implementation status. Keep dashed connectors that mean logical references between tables. Preserve all technical content and connectors without adding new claims. Adjust whitespace naturally after removing the subtitle and badges. Same clean white/green/blue professional style, crisp large readable text. No new text, no progress notes, no implementation-status legend.
