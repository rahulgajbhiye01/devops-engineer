import pygame

pygame.init()

WIDTH = 800
HEIGHT = 600

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My First Game")

clock = pygame.time.Clock()

running = True

while running:
    # 1. Input
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # 2. Update
    # game logic will go here

    # 3. Draw
    screen.fill("black")

    pygame.display.flip()

    clock.tick(60)

pygame.quit()
