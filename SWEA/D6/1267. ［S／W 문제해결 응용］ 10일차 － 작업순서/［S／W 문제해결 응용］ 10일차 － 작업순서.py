from collections import deque, defaultdict

T = 10

for test_case in range(1, T + 1):
    node, edge = map(int, input().split())
    arr = list(map(int, input().split()))

    graph = defaultdict(list)   # 간선 정보 저장
    in_degree = [0] * (node + 1)    # 진입차수 개수 저장

    for i in range(0, len(arr), 2):
        u, v = arr[i], arr[i + 1]
        graph[u].append(v)
        in_degree[v] += 1

    # 진입차수가 0인 노드들을 큐에 추가
    queue = deque([i for i in range(1, node + 1) if in_degree[i] == 0])
    result = []

    while queue:
        current = queue.popleft()
        result.append(current)

        for neighbor in graph[current]:
            in_degree[neighbor] -= 1    # 후행 노드의 진입차수 -1
            if in_degree[neighbor] == 0:    # 진입차수가 0인 후행 노드를 queue에 추가
                queue.append(neighbor)

    answer = ' '.join(map(str, result))
    print(f'#{test_case} {answer}')